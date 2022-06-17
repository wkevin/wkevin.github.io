#define PY_SSIZE_T_CLEAN
#include <Python.h>

int main()
{
  printf("hello python c api\n");
  Py_Initialize();
  printf("%s\n", Py_GetVersion());

  // 高层 API
  PyRun_SimpleString("import datetime");
  PyRun_SimpleString("print(datetime.datetime.now())");

  // 底层 API
  PyObject *mod, *func, *args, *val, *rlt;
  mod = PyImport_ImportModule("random");
  if (mod != NULL)
  {
    func = PyObject_GetAttrString(mod, "randint");
    if (func && PyCallable_Check(func))
    {
      args = PyTuple_New(2);
      // 添加第 0 个参数
      val = PyLong_FromLong(1);
      PyTuple_SetItem(args, 0, val);
      Py_DECREF(val);
      // 添加第 1 个参数
      val = PyLong_FromLong(100);
      PyTuple_SetItem(args, 1, val);
      Py_DECREF(val);
      // 调用函数
      rlt = PyObject_CallObject(func, args);
      printf("Result of call: %ld\n", PyLong_AsLong(rlt));
      Py_DECREF(args);
      Py_DECREF(rlt);
    }
  }
  Py_Finalize();
  return 0;
}